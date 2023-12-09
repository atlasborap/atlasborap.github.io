let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  document.getElementById("changeicon").innerHTML = "light_mode"
  document.getElementById('access-point-konfigurasyon-gorsel-semasi').src = "images/Access-Point-Konfigurasyon-Gorsel-Semasi-dark.webp"
  document.getElementById('policy-tag-konfigurasyon-gorsel-semasi').src = "images/Policy-Tag-Konfigurasyon-Gorsel-Semasi-dark.webp"
  document.getElementById('site-tag-konfigurasyon-gorsel-semasi').src = "images/Site-Tag-Konfigurasyon-Gorsel-Semasi-dark.webp"
  document.getElementById('rf-tag-konfigurasyon-gorsel-semasi').src = "images/RF-Tag-Konfigurasyon-Gorsel-Semasi-dark.webp"
  document.getElementById('network-topolojisi').src = "images/Network-Topolojisi-dark.webp"
  document.getElementById('configuration-vlan').src = "images/Configuration-VLAN-dark.webp"
  document.getElementById('create-vlan').src = "images/Create-VLAN-dark.webp"
  document.getElementById('trunk-allowed-vlan-all').src = "images/Trunk-Allowed-Vlan-All-dark.webp"
  document.getElementById('trunk-allowed-vlan-vlan-ids').src = "images/Trunk-Allowed-Vlan-Vlan-IDs-dark.webp"
  document.getElementById('radius-servers').src = "images/RADIUS-Servers-dark.webp"
  document.getElementById('create-aaa-radius-server').src = "images/Create-AAA-Radius-Server-dark.webp"
  document.getElementById('servers').src = "images/Servers-dark.webp"
  document.getElementById('server-groups').src = "images/Server-Groups-dark.webp"
  document.getElementById('create-aaa-radius-server-group').src = "images/Create-AAA-Radius-Server-Group-dark.webp"
  document.getElementById('ise-group').src = "images/ISE-Group-dark.webp"
  document.getElementById('aaa-method-list').src = "images/AAA-Method-List-dark.webp"
  document.getElementById('aaa-authentication').src = "images/AAA-Authentication-dark.webp"
  document.getElementById('wlans').src = "images/WLANs-dark.webp"
  document.getElementById('add-wlan').src = "images/Add-WLAN-dark.webp"
  document.getElementById('policy-profile').src = "images/Policy-Profile-dark.webp"
  document.getElementById('add-policy-profile-general').src = "images/Add-Policy-Profile-General-dark.webp"
  document.getElementById('add-policy-profile-access-policies').src = "images/Add-Policy-Profile-Access-Policies-dark.webp"
  document.getElementById('policy-tag').src = "images/Policy-Tag-dark.webp"
  document.getElementById('add-policy-tag').src = "images/Add-Policy-Tag-dark.webp"
  document.getElementById('access-points-policy').src = "images/Access-Points-dark.webp"
  document.getElementById('edit-ap').src = "images/Edit-AP-Policy-dark.webp"
  document.getElementById('advanced-wireless-setup-policy-tag').src = "images/Advanced-Wireless-Setup-dark.webp"
  document.getElementById('tag-aps-policy-tag').src = "images/Tag-APs-Policy-Tag-dark.webp"
  document.getElementById('tag-aps-policy').src = "images/Tag-APs-Policy-dark.webp"
  document.getElementById('ap-join').src = "images/AP-Join-dark.webp"
  document.getElementById('add-ap-join-profile').src = "images/Add-AP-Join-Profile-General-dark.webp"
  document.getElementById('add-ap-join-profile-management-device').src = "images/Add-AP-Join-Profile-Management-Device-dark.webp"
  document.getElementById('add-ap-join-profile-management-user').src = "images/Add-AP-Join-Profile-Management-User-dark.webp"
  document.getElementById('flex-profile').src = "images/Flex-Profile-dark.webp"
  document.getElementById('add-flex-profile').src = "images/Add-Flex-Profile-dark.webp"
  document.getElementById('site-tag').src = "images/Site-Tag-dark.webp"
  document.getElementById('site-tag-local').src = "images/Add-Site-Tag-Local-dark.webp"
  document.getElementById('site-tag-flex').src = "images/Add-Site-Tag-Flex-dark.webp"
  document.getElementById('access-points-site').src = "images/Access-Points-dark.webp"
  document.getElementById('edit-ap-site').src = "images/Edit-AP-Site-dark.webp"
  document.getElementById('advanced-wireless-setup-site-tag').src = "images/Advanced-Wireless-Setup-dark.webp"
  document.getElementById('tag-aps-site-tag').src = "images/Tag-APs-Site-Tag-dark.webp"
  document.getElementById('tag-aps-site').src = "images/Tag-APs-Site-dark.webp"
  document.getElementById('rf').src = "images/RF-dark.webp"
  document.getElementById('add-rf-profile').src = "images/Add-RF-Profile-dark.webp"
  document.getElementById('rf-tags').src = "images/RF-Tags-dark.webp"
  document.getElementById('add-rf-tag').src = "images/Add-RF-Tag-dark.webp"
  document.getElementById('access-points-rf').src = "images/Access-Points-dark.webp"
  document.getElementById('edit-ap-rf').src = "images/Edit-AP-RF-dark.webp"
  document.getElementById('edit-wireless-setup-rf-tag').src = "images/Advanced-Wireless-Setup-dark.webp"
  document.getElementById('tag-aps-rf-tag').src = "images/Tag-APs-RF-Tag-dark.webp"
  document.getElementById('tag-aps-rf').src = "images/Tag-APs-RF-dark.webp"
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.getElementById("changeicon").innerHTML = "dark_mode"
  document.getElementById('access-point-konfigurasyon-gorsel-semasi').src = "images/Access-Point-Konfigurasyon-Gorsel-Semasi-light.webp"
  document.getElementById('policy-tag-konfigurasyon-gorsel-semasi').src = "images/Policy-Tag-Konfigurasyon-Gorsel-Semasi-light.webp"
  document.getElementById('site-tag-konfigurasyon-gorsel-semasi').src = "images/Site-Tag-Konfigurasyon-Gorsel-Semasi-light.webp"
  document.getElementById('rf-tag-konfigurasyon-gorsel-semasi').src = "images/RF-Tag-Konfigurasyon-Gorsel-Semasi-light.webp"
  document.getElementById('network-topolojisi').src = "images/Network-Topolojisi-light.webp"
  document.getElementById('configuration-vlan').src = "images/Configuration-VLAN-light.webp"
  document.getElementById('create-vlan').src = "images/Create-VLAN-light.webp"
  document.getElementById('trunk-allowed-vlan-all').src = "images/Trunk-Allowed-Vlan-All-light.webp"
  document.getElementById('trunk-allowed-vlan-vlan-ids').src = "images/Trunk-Allowed-Vlan-Vlan-IDs-light.webp"
  document.getElementById('radius-servers').src = "images/RADIUS-Servers-light.webp"
  document.getElementById('create-aaa-radius-server').src = "images/Create-AAA-Radius-Server-light.webp"
  document.getElementById('servers').src = "images/Servers-light.webp"
  document.getElementById('server-groups').src = "images/Server-Groups-light.webp"
  document.getElementById('create-aaa-radius-server-group').src = "images/Create-AAA-Radius-Server-Group-light.webp"
  document.getElementById('ise-group').src = "images/ISE-Group-light.webp"
  document.getElementById('aaa-method-list').src = "images/AAA-Method-List-light.webp"
  document.getElementById('aaa-authentication').src = "images/AAA-Authentication-light.webp"
  document.getElementById('wlans').src = "images/WLANs-light.webp"
  document.getElementById('add-wlan').src = "images/Add-WLAN-light.webp"
  document.getElementById('policy-profile').src = "images/Policy-Profile-light.webp"
  document.getElementById('add-policy-profile-general').src = "images/Add-Policy-Profile-General-light.webp"
  document.getElementById('add-policy-profile-access-policies').src = "images/Add-Policy-Profile-Access-Policies-light.webp"
  document.getElementById('policy-tag').src = "images/Policy-Tag-light.webp"
  document.getElementById('add-policy-tag').src = "images/Add-Policy-Tag-light.webp"
  document.getElementById('access-points-policy').src = "images/Access-Points-light.webp"
  document.getElementById('edit-ap').src = "images/Edit-AP-Policy-light.webp"
  document.getElementById('advanced-wireless-setup-policy-tag').src = "images/Advanced-Wireless-Setup-light.webp"
  document.getElementById('tag-aps-policy-tag').src = "images/Tag-APs-Policy-Tag-light.webp"
  document.getElementById('tag-aps-policy').src = "images/Tag-APs-Policy-light.webp"
  document.getElementById('ap-join').src = "images/AP-Join-light.webp"
  document.getElementById('add-ap-join-profile').src = "images/Add-AP-Join-Profile-General-light.webp"
  document.getElementById('add-ap-join-profile-management-device').src = "images/Add-AP-Join-Profile-Management-Device-light.webp"
  document.getElementById('add-ap-join-profile-management-user').src = "images/Add-AP-Join-Profile-Management-User-light.webp"
  document.getElementById('flex-profile').src = "images/Flex-Profile-light.webp"
  document.getElementById('add-flex-profile').src = "images/Add-Flex-Profile-light.webp"
  document.getElementById('site-tag').src = "images/Site-Tag-light.webp"
  document.getElementById('site-tag-local').src = "images/Add-Site-Tag-Local-light.webp"
  document.getElementById('site-tag-flex').src = "images/Add-Site-Tag-Flex-light.webp"
  document.getElementById('access-points-site').src = "images/Access-Points-light.webp"
  document.getElementById('edit-ap-site').src = "images/Edit-AP-Site-light.webp"
  document.getElementById('advanced-wireless-setup-site-tag').src = "images/Advanced-Wireless-Setup-light.webp"
  document.getElementById('tag-aps-site-tag').src = "images/Tag-APs-Site-Tag-light.webp"
  document.getElementById('tag-aps-site').src = "images/Tag-APs-Site-light.webp"
  document.getElementById('rf').src = "images/RF-light.webp"
  document.getElementById('add-rf-profile').src = "images/Add-RF-Profile-light.webp"
  document.getElementById('rf-tags').src = "images/RF-Tags-light.webp"
  document.getElementById('add-rf-tag').src = "images/Add-RF-Tag-light.webp"
  document.getElementById('access-points-rf').src = "images/Access-Points-light.webp"
  document.getElementById('edit-ap-rf').src = "images/Edit-AP-RF-light.webp"
  document.getElementById('edit-wireless-setup-rf-tag').src = "images/Advanced-Wireless-Setup-light.webp"
  document.getElementById('tag-aps-rf-tag').src = "images/Tag-APs-RF-Tag-light.webp"
  document.getElementById('tag-aps-rf').src = "images/Tag-APs-RF-light.webp"
  localStorage.setItem('darkMode', null);
}
 
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

var acc = document.getElementsByClassName("accordion-icerik");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("icerik-accordion").innerHTML = "+ İçerik"
    } else {
      panel.style.display = "block";
      document.getElementById("icerik-accordion").innerHTML = "- İçerik"
    }
  });
}

var acc = document.getElementsByClassName("accordion-wlan-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("wlan-profile-accordion").innerHTML = "+ WLAN Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("wlan-profile-accordion").innerHTML = "- WLAN Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-policy-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("policy-profile-accordion").innerHTML = "+ Policy Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("policy-profile-accordion").innerHTML = "- Policy Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-ap-join-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("ap-join-profile-accordion").innerHTML = "+ AP Join Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("ap-join-profile-accordion").innerHTML = "- AP Join Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-flex-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("flex-profile-accordion").innerHTML = "+ Flex Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("flex-profile-accordion").innerHTML = "- Flex Profile"
    }
  });
}

var acc = document.getElementsByClassName("accordion-rf-profile");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("rf-profile-accordion").innerHTML = "+ RF Profile"
    } else {
      panel.style.display = "block";
      document.getElementById("rf-profile-accordion").innerHTML = "- RF Profile"
    }
  });
}
