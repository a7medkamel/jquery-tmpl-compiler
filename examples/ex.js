define(['lib/jquery'], function($) {
  function anonymous($,$data,undefined) {
var __="";with($data){__+="<div>\r\n        ";if((typeof(OverallScore > 0)!=="undefined" && (OverallScore > 0)!=null) && (typeof(OverallScore > 0)==="function"?(OverallScore > 0).call($data):(OverallScore > 0))){__+="\r\n            <span class=noWrap>";if(typeof(OverallScore)!=="undefined" && (OverallScore)!=null){__+=$.escapeHtml((typeof(OverallScore)==="function"?(OverallScore).call($data):(OverallScore)))}__+="/10</span>&nbsp;\r\n            <div class=\"status_icon gridDetailsImage spritedimagealign spritedimage\" id=\"qsImage";if(typeof(Id)!=="undefined" && (Id)!=null){__+=$.escapeHtml((typeof(Id)==="function"?(Id).call($data):(Id)))}__+="\" title=\"Quality Score Details\" onclick=\"$.gridPopup.clickEvent(event, function(){ $.advertiser.controls.qualityscore.DisplayQsFlyout('";if(typeof(KeywordRelevance)!=="undefined" && (KeywordRelevance)!=null){__+=$.escapeHtml((typeof(KeywordRelevance)==="function"?(KeywordRelevance).call($data):(KeywordRelevance)))}__+="','";if(typeof(LandingPageQuality)!=="undefined" && (LandingPageQuality)!=null){__+=$.escapeHtml((typeof(LandingPageQuality)==="function"?(LandingPageQuality).call($data):(LandingPageQuality)))}__+="', '";if(typeof(LandingPageRelevance)!=="undefined" && (LandingPageRelevance)!=null){__+=$.escapeHtml((typeof(LandingPageRelevance)==="function"?(LandingPageRelevance).call($data):(LandingPageRelevance)))}__+="','";if(typeof(OverallScore)!=="undefined" && (OverallScore)!=null){__+=$.escapeHtml((typeof(OverallScore)==="function"?(OverallScore).call($data):(OverallScore)))}__+="')}, 'qsContainer', 'Quality Score: &nbsp;";if(typeof(OverallScore)!=="undefined" && (OverallScore)!=null){__+=$.escapeHtml((typeof(OverallScore)==="function"?(OverallScore).call($data):(OverallScore)))}__+="&nbsp; out of 10')\" ></div>\r\n        ";}else if((true) && true){__+="\r\n            <span class=noWrap>-</span>&nbsp;\r\n        ";}__+="\r\n    </div>";}return __;
};

  return function(data){
    return anonymous($, data);
  };
});