//Homepage set to Blank Page
user_pref("browser.startup.page", 0);
//Recommend Features as you browse - Disable 
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",false);
//Recommend extensions as you browse - Disable
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
//Home Content - Disable Pocket Add-On
pref("extensions.pocket.enabled", false);
//Disable Home Content - Recommended By Pocket
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
//Disable Home Content - shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
