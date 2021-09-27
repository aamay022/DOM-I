const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.src =  siteContent['main-content']['middle-img-src']

const links = document.querySelector('a')

const serviceLink = links
serviceLink.textContent = siteContent["nav"]['nav-item-1']
serviceLink.style.color = 'green'

const productLink = links.nextElementSibling
productLink.textContent = siteContent["nav"]['nav-item-2']
productLink.style.color = 'green'

const visionLink = productLink.nextElementSibling
visionLink.textContent = siteContent["nav"]['nav-item-3']
visionLink.style.color = 'green'

const featuresLink = visionLink.nextElementSibling
featuresLink.textContent = siteContent["nav"]['nav-item-4']
featuresLink.style.color = 'green'

const aboutLink = featuresLink.nextElementSibling
aboutLink.textContent = siteContent["nav"]['nav-item-5']
aboutLink.style.color = 'green'

const contactLink = aboutLink.nextElementSibling
contactLink.textContent = siteContent["nav"]['nav-item-6']
contactLink.style.color = 'green'

const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"]

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]

const headings = document.querySelectorAll('.text-content h4')

headings[0].textContent= siteContent['main-content']['features-h4']
headings[1].textContent=siteContent['main-content']['about-h4']
headings[2].textContent=siteContent['main-content']['services-h4']
headings[3].textContent=siteContent['main-content']['product-h4']
headings[4].textContent=siteContent['main-content']['vision-h4']

const info = document.querySelectorAll('.text-content p')

info[0].textContent= siteContent['main-content']['features-content']
info[1].textContent=siteContent['main-content']['about-content']
info[2].textContent=siteContent['main-content']['services-content']
info[3].textContent=siteContent['main-content']['product-content']
info[4].textContent=siteContent['main-content']['vision-content']
//Theres probably a faster way of doing this using for each, but i couldnt find it.
//i also wanted to put all the content from the array into seperate arrays ([headings] && [info's])

let contactHeading = document.querySelector('.contact h4')
contactHeading.textContent = siteContent['contact']['contact-h4']

let contactAdrress = document.querySelector('.contact p')
contactAdrress.textContent = siteContent['contact']['address']

let contactPhone = contactAdrress.nextElementSibling
contactPhone.textContent = siteContent['contact']['phone']

let contactEmail = contactPhone.nextElementSibling
contactEmail.textContent = siteContent['contact']['email']

let footerElem = document.querySelector('footer p')
footerElem.textContent = siteContent['footer']['copyright']

const extraLink  = document.createElement('a')
extraLink.textContent = 'Important'
extraLink.href = '#'
document.querySelector('nav').prepend(extraLink)
extraLink.style.color = 'green'

const extraContact  = document.createElement('p')
extraContact.textContent = 'Extra Contact Info'
document.querySelector('.contact').appendChild(extraContact)
