//Add this user.js file to your firefox profile directory


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
//under History - Clear history when firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
//Address Bar - Uncheck Browsing History
user_pref("browser.urlbar.suggest.history", false);
//Permissions - block new request - location
user_pref("permissions.default.geo", 2);
//Permissions - block new request - Camera
user_pref("permissions.default.camera", 2);
//Permissions - block new request - Microphone
user_pref("permissions.default.microphone", 2);
//Permissions - block new request - Notifications 
user_pref("permissions.default.desktop-notification", 2);
//Deceptive Content and Dangerous Software Protection
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
//HTTPS-only mode
user_pref("dom.security.https_only_mode", true);
//Disables firefox from sharing your location
user_pref("geo.enabled", false);
//blocks sending battery level information
user_pref("dom.battery.enabled", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
//disable telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.server","");
user_pref("toolkit.telemetry.unified", false);
user_pref("media.autoplay.default", 5);
//disable embedded notifications
user_pref("dom.webnotifications.enabled", false); 
//Enable Firefox's anti-fingerprinting mode (may block the installation of containers)
user_pref("privacy.resistFingerprinting", true);
//disable fingerprinting
user_pref("webgl.disabled", true);
//referring website - disable
user_pref("network.http.sendRefererHeader", 0);
//disables any embedded Firefox accounts
user_pref("identity.fxaccounts.enabled", false);
//disable crash reporting
user_pref("browser.tabs.crashReporting.sendReport", false);
//prevents some malicious PDF actions
user_pref("pdfjs.enableScripting", false);
//disable prefetch
user_pref("network.dns.disablePrefetch", true);
//disables prefectching also
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
