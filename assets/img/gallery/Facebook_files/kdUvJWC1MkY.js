;/*FB_PKG_DELIM*/

__d("VideoPlayerWatchInlinePauseScreenRowItem_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlinePauseScreenRowItem_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlinePauseScreenRowItem_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlinePauseScreenRowItem_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailImageWithPreview_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeDurationThumbnailOverlay_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeTitleOwnerThumbnailOverlay_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6122595884503717"}),null);
__d("VideoPlayerWatchInlinePauseScreenRowQuery.graphql",["VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},c={defaultValue:null,kind:"LocalArgument",name:"entry_channel_id"},d={defaultValue:null,kind:"LocalArgument",name:"entry_point"},e={defaultValue:null,kind:"LocalArgument",name:"id"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g=[{kind:"Variable",name:"id",variableName:"id"}],h=[{kind:"Variable",name:"entry_channel_id",variableName:"entry_channel_id"},{kind:"Variable",name:"entry_point",variableName:"entry_point"}],i=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"exclude_video",variableName:"id"},{kind:"Literal",name:"first",value:3}],j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[j,k,{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlinePauseScreenRowItem_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},m=[k],n={kind:"InlineFragment",selections:m,type:"Node",abstractKey:"__isNode"},o={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[j,{kind:"InlineFragment",selections:[k,{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"video_home"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[j,{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoHomeVideoThumbnailImageWithPreview_video__cix_screen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null},n],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"video_home")'},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"huddle_thumbnail_enabled",plural:!1,selections:[{args:null,documentName:"CometVideoHomeHuddleThumbnailWithRelay3d_video",fragmentName:"CometVideoHomeHuddleThumbnail_video",fragmentPropName:"video",kind:"ModuleImport"},k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlinePauseScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlinePauseScreenRowItem_story"},l,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[l],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,c,d,f],kind:"Operation",name:"VideoPlayerWatchInlinePauseScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[j,k,{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[j,{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},o,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[o,k],storageKey:null}],type:"Story",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"FBShortsMidCardFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBDummyReelsInWatchIFU",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBSFTFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null},k],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}]},params:{id:b("VideoPlayerWatchInlinePauseScreenRowQuery_facebookRelayOperation"),metadata:{},name:"VideoPlayerWatchInlinePauseScreenRowQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailImageWithPreview_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeDurationThumbnailOverlay_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5436747216427890"}),null);
__d("VideoPlayerWatchInlineEndScreenRowQuery.graphql",["VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},c={defaultValue:null,kind:"LocalArgument",name:"entry_channel_id"},d={defaultValue:null,kind:"LocalArgument",name:"entry_point"},e={defaultValue:null,kind:"LocalArgument",name:"id"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g=[{kind:"Variable",name:"id",variableName:"id"}],h=[{kind:"Variable",name:"entry_channel_id",variableName:"entry_channel_id"},{kind:"Variable",name:"entry_point",variableName:"entry_point"}],i=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"exclude_video",variableName:"id"},{kind:"Literal",name:"first",value:3}],j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[j,k,{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},m=[k],n={kind:"InlineFragment",selections:m,type:"Node",abstractKey:"__isNode"},o={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[j,{kind:"InlineFragment",selections:[k,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"video_home"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[j,{kind:"InlineFragment",selections:[{args:null,documentName:"CometVideoHomeVideoThumbnailImageWithPreview_video__cix_screen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null},n],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"video_home")'},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"huddle_thumbnail_enabled",plural:!1,selections:[{args:null,documentName:"CometVideoHomeHuddleThumbnailWithRelay3d_video",fragmentName:"CometVideoHomeHuddleThumbnail_video",fragmentPropName:"video",kind:"ModuleImport"},k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_story"},l,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[l],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,c,d,f],kind:"Operation",name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[j,k,{kind:"InlineFragment",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[j,{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},o,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[o,k],storageKey:null}],type:"Story",abstractKey:null},n,{kind:"InlineFragment",selections:m,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"FBShortsMidCardFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBDummyReelsInWatchIFU",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBSFTFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null},k],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}]},params:{id:b("VideoPlayerWatchInlineEndScreenRowQuery_facebookRelayOperation"),metadata:{},name:"VideoPlayerWatchInlineEndScreenRowQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeTitleOwnerThumbnailOverlay_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometVideoHomeTitleOwnerThumbnailOverlay.react",["CometLink.react","CometRelay","CometVideoHomePlayButtonThumbnailOverlay.react","CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql","CometVideoHomeVideoThumbnailHoverContext","TetraTextPairing.react","VideoHomeTypedLoggerLite","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext,k={root:{opacity:"xg01cxk",transitionDelay:"x1ahifba",transitionDuration:"xu6gjpd",transitionProperty:"x19991ni",transitionTimingFunction:"x7lz9yc",$$css:!0},text:{paddingEnd:"x1sxyh0",paddingStart:"xurb0ha",paddingTop:"x1y1aw1k",$$css:!0},textContainer:{backgroundColor:"xrmyhay",bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},visible:{opacity:"x1hc1fzr",$$css:!0}};function a(a){a=a.video;var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeTitleOwnerThumbnailOverlay_video.graphql"),a),f=j(c("CometVideoHomeVideoThumbnailHoverContext")),g=e==null?void 0:e.id,l=e==null?void 0:e.owner;if(a==null||g==null||l==null)return i.jsx(c("CometVideoHomePlayButtonThumbnailOverlay.react"),{size:48});a=e.title_with_fallback;var m=l.uri_token;m=m!=null?c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:m}):l.url;g=c("XCometWatchControllerRouteBuilder").buildURL({v:g});var n=function(){c("VideoHomeTypedLoggerLite").log({entry_point_type:"inline_video_pause_screen_tapped",event:"video_tab_selected",event_target:"watch_video_permalink",tab_selection_type:"user_initiated_click"}),c("VideoHomeTypedLoggerLite").log({click_point:"inline_pause_screen",event:"click",event_target:"video",event_target_id:e.id})},o=function(){var a;c("VideoHomeTypedLoggerLite").log({click_point:"inline_pause_screen",event:"click",event_target:"page",event_target_id:(a=e.owner)==null?void 0:a.id})};return i.jsx("div",{className:c("stylex")(k.root,f&&k.visible,k.textContainer),children:i.jsx("div",{children:i.jsx("div",{className:"x1sxyh0 xurb0ha x1y1aw1k",children:i.jsx(c("TetraTextPairing.react"),{body:i.jsx(c("CometLink.react"),{color:"secondary",href:m,onClick:o,children:l.name}),bodyLineLimit:1,headline:a!=null&&i.jsx(c("CometLink.react"),{color:"white",href:g,onClick:n,children:a}),headlineLineLimit:2,level:4,reduceEmphasis:!0})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlinePauseScreenRowItem.react",["CometLink.react","CometRelay","CometTrackingCodeProvider.react","CometVideoHomeDurationThumbnailOverlay.react","CometVideoHomeTitleOwnerThumbnailOverlay.react","CometVideoHomeVideoThumbnailHoverContext","CometVideoHomeVideoThumbnailImageWithPreview.react","VideoHomeTypedLoggerLite","VideoPlayerWatchInlinePauseScreenRowItem_story.graphql","VideoPlayerWatchInlinePauseScreenRowItem_video.graphql","XCometWatchControllerRouteBuilder","react","useInnerMostTrackingCode","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");e=d("react");var k=e.useCallback,l=e.useState,m=84,n=150;function a(a){var e=a.position,f=a.story;a=a.video;f=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchInlinePauseScreenRowItem_story.graphql"),f);e=c("useStoryVPVDLogger")({interactionSourceOverride:54,position:e,trackable:f==null?void 0:f.encrypted_tracking});var g=e[0];e=e[1];var i=f.click_tracking_linkshim_cb,k=f.encrypted_click_tracking;f=f.encrypted_tracking;i={click_tracking_linkshim_cb:i||"",encrypted_click_tracking:k||"",encrypted_tracking:f||""};return j.jsx("div",{className:"x78zum5 xdt5ytf",ref:g,children:j.jsx(c("CometTrackingCodeProvider.react"),{trackingCode:i,children:j.jsx(o,{video:a,vpvdDebuggingInfoComponent:e})})})}a.displayName=a.name+" [from "+f.id+"]";function o(a){var e=a.video;a=a.vpvdDebuggingInfoComponent;var f=l(!1),g=f[0],h=f[1];f=k(function(){h(!0)},[]);var o=k(function(){h(!1)},[]),p=c("useInnerMostTrackingCode")(),q=d("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerWatchInlinePauseScreenRowItem_video.graphql"),e);e=q==null?void 0:q.id;if(q==null||e==null)return null;e=c("XCometWatchControllerRouteBuilder").buildURL({v:e});var r=function(){c("VideoHomeTypedLoggerLite").log({entry_point_type:"inline_video_pause_screen_tapped",event:"video_tab_selected",event_target:"watch_video_permalink",tab_selection_type:"user_initiated_click"}),c("VideoHomeTypedLoggerLite").log({click_point:"inline_pause_screen",event:"click",event_target:"video",event_target_id:q.id})};p={playerSubOrigin:"inline_pause_screen",trackingCode:p};return j.jsxs(j.Fragment,{children:[a,j.jsx(c("CometLink.react"),{href:e,onClick:r,passthroughProps:p,children:j.jsx(c("CometVideoHomeVideoThumbnailHoverContext").Provider,{value:g,children:j.jsxs("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x6ikm8r x10wlt62 x1n2onr6",onMouseEnter:f,onMouseLeave:o,children:[j.jsx(c("CometVideoHomeVideoThumbnailImageWithPreview.react"),{height:m,video:q,width:n}),j.jsx(c("CometVideoHomeDurationThumbnailOverlay.react"),{video:q}),j.jsx(c("CometVideoHomeTitleOwnerThumbnailOverlay.react"),{video:q})]})})})]})}o.displayName=o.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlinePauseScreenRow.react",["fbt","ix","CometFlexibleRow_DEPRECATED.react","CometImage.react","CometLink.react","CometPressable.react","RelayHooks","TetraText.react","VideoPlayerWatchInlinePauseScreenRowItem.react","VideoPlayerWatchInlinePauseScreenRowQuery.graphql","WebPixelRatio","XCometWatchControllerRouteBuilder","react","requireDeferred","useCometSize_DO_NOT_USE","useImpressionLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useEffect,m=e.useState,n=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("VideoPlayerWatchInlinePauseScreenRow.react");function a(a){var e=a.onPauseScreenDismissed,f=a.videoChainingCaller,g=a.videoChannelEntryPoint,o=a.videoChannelID;a=a.videoID;var p=c("useCometSize_DO_NOT_USE")(),q=p[0];p=p[1];f=d("RelayHooks").useLazyLoadQuery(j!==void 0?j:j=b("VideoPlayerWatchInlinePauseScreenRowQuery.graphql"),{caller:f,entry_channel_id:o,entry_point:g,id:a,scale:d("WebPixelRatio").get()});o=m(!1);var r=o[0],s=o[1];g=m(!1);var t=g[0],u=g[1];a=c("useImpressionLogger")(n,function(a,b){t||(a.log({event:"inline_pause_screen_impression"}),u(!0))});g=(o=f==null?void 0:(o=f.video)==null?void 0:(g=o.video_channel)==null?void 0:(f=g.video_channel_feed)==null?void 0:f.nodes)!=null?o:[];var v=g.map(function(a,b){var d;d=(d=a==null?void 0:a.attached_story)!=null?d:a;d=d==null?void 0:(d=d.attachments)==null?void 0:(d=d[0])==null?void 0:d.media;return d==null||d.__typename!=="Video"?null:k.jsx(c("VideoPlayerWatchInlinePauseScreenRowItem.react"),{position:b,story:a,video:d},d.id)}).filter(Boolean);l(function(){r||(n.onReady(function(a){a.log({event:"video_pause_card_fetch",result_count:v.length})}),s(!0))},[r,v.length]);f=function(){n.onReady(function(a){a.log({click_point:"inline_pause_screen",event:"click",event_target:"watch"}),a.log({entry_point_type:"inline_video_pause_screen_tapped",event:"video_tab_selected",event_target:"watch_home_www",tab_selection_type:"user_initiated_click"})})};return v.length>0?k.jsxs("div",{className:"x78zum5 xdt5ytf x1iyjqo2 x1a7vs8u x13a6bvl x1rxj1xn",ref:a,children:[k.jsxs("div",{className:"x78zum5 x1qughib",children:[k.jsx("div",{className:"x1l90r2v",children:k.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized2",children:k.jsx(c("CometLink.react"),{href:c("XCometWatchControllerRouteBuilder").buildURL({}),onClick:f,children:h._("More Videos on Watch")})})}),k.jsx("div",{className:"xlup9mm",children:e!=null?k.jsx(c("CometPressable.react"),{label:h._("Click to dismiss pause screen"),onPress:e,children:k.jsx("div",{className:"x1ypdohk xlup9mm x67bb7w",children:k.jsx(c("CometImage.react"),{src:i("480713")})})}):null})]}),k.jsx(c("CometFlexibleRow_DEPRECATED.react"),{box:p,columnMaxWidth:250,columnMinWidth:100,justify:"start",minItems:v.length,rootRef:q,children:v})]}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlinePauseScreenRowContainer.react",["VideoPlayerWatchInlinePauseScreenRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.onPauseScreenDismissed,d=a.videoChainingCaller,e=a.videoChannelEntryPoint,f=a.videoChannelID;a=a.videoID;return h.jsx(c("VideoPlayerWatchInlinePauseScreenRow.react"),{onPauseScreenDismissed:b,videoChainingCaller:d,videoChannelEntryPoint:e,videoChannelID:f,videoID:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlineEndScreenRowItem.react",["CometLink.react","CometRelay","CometTrackingCodeProvider.react","CometVideoHomeDurationThumbnailOverlay.react","CometVideoHomePlayButtonThumbnailOverlay.react","CometVideoHomeVideoThumbnailHoverContext","CometVideoHomeVideoThumbnailImageWithPreview.react","TetraTextPairing.react","VideoHomeTypedLoggerLite","VideoPlayerWatchInlineEndScreenRowItem_story.graphql","VideoPlayerWatchInlineEndScreenRowItem_video.graphql","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","react","useInnerMostTrackingCode","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");e=d("react");var k=e.useCallback,l=e.useState,m=84,n=150;function a(a){var e=a.position,f=a.story;a=a.video;f=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchInlineEndScreenRowItem_story.graphql"),f);e=c("useStoryVPVDLogger")({interactionSourceOverride:54,position:e,trackable:f==null?void 0:f.encrypted_tracking});var g=e[0];e=e[1];var i=f.click_tracking_linkshim_cb,k=f.encrypted_click_tracking;f=f.encrypted_tracking;i={click_tracking_linkshim_cb:i||"",encrypted_click_tracking:k||"",encrypted_tracking:f||""};return j.jsx("div",{className:"x78zum5 xdt5ytf",ref:g,children:j.jsx(c("CometTrackingCodeProvider.react"),{trackingCode:i,children:j.jsx(o,{video:a,vpvdDebuggingInfoComponent:e})})})}a.displayName=a.name+" [from "+f.id+"]";function o(a){var e=a.video;a=a.vpvdDebuggingInfoComponent;var f=l(!1),g=f[0],h=f[1];f=k(function(){h(!0)},[]);var o=k(function(){h(!1)},[]),p=c("useInnerMostTrackingCode")(),q=d("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerWatchInlineEndScreenRowItem_video.graphql"),e);e=q==null?void 0:q.id;var r=q==null?void 0:q.owner;if(q==null||e==null||r==null)return null;var s=q.title_with_fallback,t=r.uri_token;t=t!=null?c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:t}):r.url;e=c("XCometWatchControllerRouteBuilder").buildURL({v:e});var u=function(){c("VideoHomeTypedLoggerLite").log({entry_point_type:"inline_video_end_screen_tapped",event:"video_tab_selected",event_target:"watch_video_permalink",tab_selection_type:"user_initiated_click"}),c("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"video",event_target_id:q.id})},v=function(){var a;c("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"page",event_target_id:(a=q.owner)==null?void 0:a.id})};p={playerSubOrigin:"inline_end_screen",trackingCode:p};return j.jsxs(j.Fragment,{children:[a,j.jsx(c("CometLink.react"),{href:e,onClick:u,passthroughProps:p,children:j.jsx(c("CometVideoHomeVideoThumbnailHoverContext").Provider,{value:g,children:j.jsxs("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x6ikm8r x10wlt62 x1n2onr6",onMouseEnter:f,onMouseLeave:o,children:[j.jsx(c("CometVideoHomeVideoThumbnailImageWithPreview.react"),{height:m,video:q,width:n}),j.jsx(c("CometVideoHomeDurationThumbnailOverlay.react"),{video:q}),j.jsx(c("CometVideoHomePlayButtonThumbnailOverlay.react"),{size:48})]})})}),j.jsx("div",{className:"x1sxyh0 x1y1aw1k",children:j.jsx(c("TetraTextPairing.react"),{body:j.jsx(c("CometLink.react"),{color:"secondary",href:t,onClick:v,children:r.name}),bodyLineLimit:1,headline:s!=null&&j.jsx(c("CometLink.react"),{color:"white",href:e,onClick:u,passthroughProps:p,children:s}),headlineLineLimit:3,level:4,reduceEmphasis:!0})})]})}o.displayName=o.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlineEndScreenRow.react",["fbt","CometFlexibleRow_DEPRECATED.react","CometLink.react","RelayHooks","TetraText.react","VideoPlayerWatchInlineEndScreenRowItem.react","VideoPlayerWatchInlineEndScreenRowQuery.graphql","WebPixelRatio","XCometWatchControllerRouteBuilder","react","requireDeferred","useCometSize_DO_NOT_USE","useImpressionLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useEffect,l=e.useState,m=c("requireDeferred")("VideoHomeTypedLoggerLite").__setRef("VideoPlayerWatchInlineEndScreenRow.react");function a(a){var e=a.videoChainingCaller,f=a.videoChannelEntryPoint,g=a.videoChannelID;a=a.videoID;var n=c("useCometSize_DO_NOT_USE")(),o=n[0];n=n[1];e=d("RelayHooks").useLazyLoadQuery(i!==void 0?i:i=b("VideoPlayerWatchInlineEndScreenRowQuery.graphql"),{caller:e,entry_channel_id:g,entry_point:f,id:a,scale:d("WebPixelRatio").get()});g=l(!1);var p=g[0],q=g[1];f=l(!1);var r=f[0],s=f[1];a=c("useImpressionLogger")(m,function(a,b){r||(a.log({event:"inline_end_screen_impression"}),s(!0))});f=(g=e==null?void 0:(g=e.video)==null?void 0:(f=g.video_channel)==null?void 0:(e=f.video_channel_feed)==null?void 0:e.nodes)!=null?g:[];var t=f.map(function(a,b){var d;d=(d=a==null?void 0:a.attached_story)!=null?d:a;d=d==null?void 0:(d=d.attachments)==null?void 0:(d=d[0])==null?void 0:d.media;return d==null||d.__typename!=="Video"?null:j.jsx(c("VideoPlayerWatchInlineEndScreenRowItem.react"),{position:b,story:a,video:d},d.id)}).filter(Boolean);k(function(){p||(m.onReady(function(a){a.log({event:"video_end_card_fetch",result_count:t.length})}),q(!0))},[p,t.length]);e=function(){m.onReady(function(a){a.log({click_point:"inline_end_screen",event:"click",event_target:"watch"}),a.log({entry_point_type:"inline_video_end_screen_tapped",event:"video_tab_selected",event_target:"watch_home_www",tab_selection_type:"user_initiated_click"})})};return t.length>0?j.jsxs("div",{className:"x78zum5 xdt5ytf x1iyjqo2 x1a7vs8u xl56j7k x1l90r2v",ref:a,children:[j.jsx("div",{className:"x1l90r2v",children:j.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized2",children:j.jsx(c("CometLink.react"),{href:c("XCometWatchControllerRouteBuilder").buildURL({}),onClick:e,children:h._("More videos on Watch")})})}),j.jsx(c("CometFlexibleRow_DEPRECATED.react"),{box:n,columnMaxWidth:250,columnMinWidth:100,justify:"start",minItems:t.length,rootRef:o,children:t})]}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerWatchInlineEndScreenRowContainer.react",["VideoPlayerWatchInlineEndScreenRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.videoChainingCaller,d=a.videoChannelEntryPoint,e=a.videoChannelID;a=a.videoID;return h.jsx(c("VideoPlayerWatchInlineEndScreenRow.react"),{videoChainingCaller:b,videoChannelEntryPoint:d,videoChannelID:e,videoID:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);