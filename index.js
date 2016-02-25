var argv      = require('yargs').argv
  , fs        = require('fs')
  , uuid      = require('uuid')
  , util      = require('util')
  , mkpath    = require('mkpath')
  , path      = require('path')
  , Promise   = require('bluebird')
  , jqtpl     = require('jqtpl')
  , _         = require('underscore')
  , ejs       = require('ejs')
  , glob      = require('glob');
  ;

function single(file, read_dir, out_dir, terminal) {
  var write_to  = path.join(out_dir, path.basename(file, '.jqtmpl') + '.js')
    , read_from = path.join(read_dir, file)
    ;

  return Promise
    .promisify(fs.readFile)(read_from, 'utf8')
    .then(function(data){
      var id  = uuid.v4()
        , fct = jqtpl.compile(data, id)
        ;

      return Promise
              .promisify(fs.readFile)(path.join(__dirname, './template.ejs'), 'utf8')
              .then(function(template){
                return ejs.render(template, { fct_string : jqtpl.cache[id].toString() });
              })
              .then(function(text){
                // There is a bug in the compiler; so we fix it here
                return text
                        .replace(/function\(\$value,\s*\$index\)/g, 'function($index, $value)')
                        ;
              })
              ;
    })
    .then(function(text){
      return Promise.promisify(fs.writeFile)(write_to, text, 'utf8');
    })
    .nodeify(function(err, res){
      if (terminal) {
        var out = file + ' => ' + write_to;
        err? console.error('error: ' + out) : console.log(out);

        if (err) {
          console.error(err);
        }
      }
    })
    ;
}

function main(glob_pattern, read_dir /*cwd*/, out_dir /*output directory*/, terminal /*is running within the terminal on its own*/) {
  return Promise
        .promisify(mkpath)(out_dir)
        .then(function(){
          return Promise
                  .promisify(glob)(glob_pattern, {
                      cwd       : read_dir || process.cwd()
                    , nosort    : true
                    , silent    : true
                    , strict    : false
                    , nonull    : false
                  })
                  .map(function(item, index, arrayLength){
                    return single(item, read_dir, out_dir || process.cwd(), terminal);
                  })
                  .spread(function(){

                  })
                  ;
        })
        ;
}

if (require.main === module) {
  main(argv.g, argv.r, argv.o, true /*terminal*/)
    .then(function(text){
      console.log(text);
    })
    .catch(function(err){
      console.error(err);
    });
}

module.exports = {
    main            : main
};