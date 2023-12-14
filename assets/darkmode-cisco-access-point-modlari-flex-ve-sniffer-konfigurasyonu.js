let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  document.getElementById("changeicon").innerHTML = "light_mode"
  document.getElementById('capwap').src = "images/CAPWAP-dark.webp"
  document.getElementById('local-switching-central-switching').src = "images/Local-Switching-Central-Switching-dark.webp"
  document.getElementById('network-topolojisi-flex').src = "images/Network-Topolojisi-Flex-dark.webp"
  document.getElementById('configuration-vlan').src = "images/Configuration-VLAN-dark.webp"
  document.getElementById('create-vlan').src = "images/Create-VLAN-dark.webp"
  document.getElementById('trunk-allowed-vlan-all').src = "images/Trunk-Allowed-Vlan-All-dark.webp"
  document.getElementById('trunk-allowed-vlan-vlan-ids').src = "images/Trunk-Allowed-Vlan-Vlan-IDs-dark.webp"
  document.getElementById('wlans-add').src = "images/WLANs-Add-dark.webp"
  document.getElementById('add-wlan').src = "images/Add-WLAN-dark.webp"
  document.getElementById('wlans').src = "images/WLANs-dark.webp"
  document.getElementById('policy-profile-add').src = "images/Policy-Profile-Add-dark.webp"
  document.getElementById('add-policy-profile-for-central-1-general').src = "images/Add-Policy-Profile-for-Central-1-General-dark.webp"
  document.getElementById('add-policy-profile-for-central-1-access-policies').src = "images/Add-Policy-Profile-for-Central-1-Access-Policies-dark.webp"
  document.getElementById('add-policy-profile-for-flex-1-general').src = "images/Add-Policy-Profile-for-Flex-1-General-dark.webp"
  document.getElementById('disabling-central-switching').src = "images/Disabling-Central-Switching-dark.webp"
  document.getElementById('add-policy-profile-for-flex-1-access-policies').src = "images/Add-Policy-Profile-for-Flex-1-Access-Policies-dark.webp"
  document.getElementById('add-policy-profile-for-flex-2-general').src = "images/Add-Policy-Profile-for-Flex-2-General-dark.webp"
  document.getElementById('add-policy-profile-for-flex-2-access-policies').src = "images/Add-Policy-Profile-for-Flex-2-Access-Policies-dark.webp"
  document.getElementById('policy-profile').src = "images/Policy-Profile-dark.webp"
  document.getElementById('policy-tag').src = "images/Policy-Tag-dark.webp"
  document.getElementById('add-policy-tag-1').src = "images/Add-Policy-Tag-1-dark.webp"
  document.getElementById('add-policy-tag-2').src = "images/Add-Policy-Tag-2-dark.webp"
  document.getElementById('flex-profile').src = "images/Flex-Profile-dark.webp"
  document.getElementById('add-flex-profile-general').src = "images/Add-Flex-Profile-General-dark.webp"
  document.getElementById('add-flex-profile-add-vlan').src = "images/Add-Flex-Profile-Add-VLAN-dark.webp"
  document.getElementById('add-flex-profile-added-vlan').src = "images/Add-Flex-Profile-Added-VLAN-dark.webp"
  document.getElementById('site-tag').src = "images/Site-Tag-dark.webp"
  document.getElementById('add-site-tag').src = "images/Add-Site-Tag-dark.webp"
  document.getElementById('access-points').src = "images/Access-Points-dark.webp"
  document.getElementById('edit-ap-policy-site').src = "images/Edit-AP-Policy-Site-dark.webp"
  document.getElementById('advanced-wireless-setup').src = "images/Advanced-Wireless-Setup-dark.webp"
  document.getElementById('tag-aps-site-tag').src = "images/Tag-APs-Site-Tag-dark.webp"
  document.getElementById('tag-aps-policy-tag-site-tag').src = "images/Tag-APs-Policy-Tag-Site-Tag-dark.webp"
  document.getElementById('acl').src = "images/ACL-dark.webp"
  document.getElementById('add-acl-setup').src = "images/Add-ACL-Setup-dark.webp"
  document.getElementById('edit-policy-profile-wlan-acl').src = "images/Edit-Policy-Profile-WLAN-ACL-dark.webp"
  document.getElementById('edit-flex-profile-policy-acl').src = "images/Edit-Flex-Profile-Policy-ACL-dark.webp"
  document.getElementById('monitoring-wireless-clients').src = "images/Monitoring-Wireless-Clients-dark.webp"
  document.getElementById('access-points-sniffer').src = "images/Access-Points-dark.webp"
  document.getElementById('edit-ap-ap-mode').src = "images/Edit-AP-General-AP-Mode-Sniffer-dark.webp"
  document.getElementById('edit-radios-24-ghz-band-enable-sniffing').src = "images/Edit-Radios-24-GHz-Band-Enable-Sniffing-dark.webp"
  document.getElementById('edit-ap-general-ap-mode-clear').src = "images/Edit-AP-General-AP-Mode-Clear-dark.webp"
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.getElementById("changeicon").innerHTML = "dark_mode"
  document.getElementById('capwap').src = "images/CAPWAP-light.webp"
  document.getElementById('local-switching-central-switching').src = "images/Local-Switching-Central-Switching-light.webp"
  document.getElementById('network-topolojisi-flex').src = "images/Network-Topolojisi-Flex-light.webp"
  document.getElementById('configuration-vlan').src = "images/Configuration-VLAN-light.webp"
  document.getElementById('create-vlan').src = "images/Create-VLAN-light.webp"
  document.getElementById('trunk-allowed-vlan-all').src = "images/Trunk-Allowed-Vlan-All-light.webp"
  document.getElementById('trunk-allowed-vlan-vlan-ids').src = "images/Trunk-Allowed-Vlan-Vlan-IDs-light.webp"
  document.getElementById('wlans-add').src = "images/WLANs-Add-light.webp"
  document.getElementById('add-wlan').src = "images/Add-WLAN-light.webp"
  document.getElementById('wlans').src = "images/WLANs-light.webp"
  document.getElementById('policy-profile-add').src = "images/Policy-Profile-Add-light.webp"
  document.getElementById('add-policy-profile-for-central-1-general').src = "images/Add-Policy-Profile-for-Central-1-General-light.webp"
  document.getElementById('add-policy-profile-for-central-1-access-policies').src = "images/Add-Policy-Profile-for-Central-1-Access-Policies-light.webp"
  document.getElementById('add-policy-profile-for-flex-1-general').src = "images/Add-Policy-Profile-for-Flex-1-General-light.webp"
  document.getElementById('disabling-central-switching').src = "images/Disabling-Central-Switching-light.webp"
  document.getElementById('add-policy-profile-for-flex-1-access-policies').src = "images/Add-Policy-Profile-for-Flex-1-Access-Policies-light.webp"
  document.getElementById('add-policy-profile-for-flex-2-general').src = "images/Add-Policy-Profile-for-Flex-2-General-light.webp"
  document.getElementById('add-policy-profile-for-flex-2-access-policies').src = "images/Add-Policy-Profile-for-Flex-2-Access-Policies-light.webp"
  document.getElementById('policy-profile').src = "images/Policy-Profile-light.webp"
  document.getElementById('policy-tag').src = "images/Policy-Tag-light.webp"
  document.getElementById('add-policy-tag-1').src = "images/Add-Policy-Tag-1-light.webp"
  document.getElementById('add-policy-tag-2').src = "images/Add-Policy-Tag-2-light.webp"
  document.getElementById('flex-profile').src = "images/Flex-Profile-light.webp"
  document.getElementById('add-flex-profile-general').src = "images/Add-Flex-Profile-General-light.webp"
  document.getElementById('add-flex-profile-add-vlan').src = "images/Add-Flex-Profile-Add-VLAN-light.webp"
  document.getElementById('add-flex-profile-added-vlan').src = "images/Add-Flex-Profile-Added-VLAN-light.webp"
  document.getElementById('site-tag').src = "images/Site-Tag-light.webp"
  document.getElementById('add-site-tag').src = "images/Add-Site-Tag-light.webp"
  document.getElementById('access-points').src = "images/Access-Points-light.webp"
  document.getElementById('edit-ap-policy-site').src = "images/Edit-AP-Policy-Site-light.webp"
  document.getElementById('advanced-wireless-setup').src = "images/Advanced-Wireless-Setup-light.webp"
  document.getElementById('tag-aps-site-tag').src = "images/Tag-APs-Site-Tag-light.webp"
  document.getElementById('tag-aps-policy-tag-site-tag').src = "images/Tag-APs-Policy-Tag-Site-Tag-light.webp"
  document.getElementById('acl').src = "images/ACL-light.webp"
  document.getElementById('add-acl-setup').src = "images/Add-ACL-Setup-light.webp"
  document.getElementById('edit-policy-profile-wlan-acl').src = "images/Edit-Policy-Profile-WLAN-ACL-light.webp"
  document.getElementById('edit-flex-profile-policy-acl').src = "images/Edit-Flex-Profile-Policy-ACL-light.webp"
  document.getElementById('monitoring-wireless-clients').src = "images/Monitoring-Wireless-Clients-light.webp"
  document.getElementById('access-points-sniffer').src = "images/Access-Points-light.webp"
  document.getElementById('edit-ap-ap-mode').src = "images/Edit-AP-General-AP-Mode-Sniffer-light.webp"
  document.getElementById('edit-radios-24-ghz-band-enable-sniffing').src = "images/Edit-Radios-24-GHz-Band-Enable-Sniffing-light.webp"
  document.getElementById('edit-ap-general-ap-mode-clear').src = "images/Edit-AP-General-AP-Mode-Clear-light.webp"
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
