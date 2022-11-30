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
//Disable Home Content - Web Search
user_pref("browser.newtabpage.activity-stream.showSearch", false);
//Delete cookies and site data when Firefox is closed
user_pref("network.cookie.lifetimePolicy", 2);
//Ask to save logins and passwords for websites - Disable
user_pref("signon.rememberSignons", false);
//Show alerts about passwords for breached websites - Disable
user_pref("signon.management.page.breach-alerts.enabled", false);
//Firefox will use custom settings for history
user_pref("privacy.history.custom", true);
//under History - Remember browsing and download history
user_pref("places.history.enabled", false);
//under History - Remember search and form history
user_pref("browser.formfill.enable", false);

