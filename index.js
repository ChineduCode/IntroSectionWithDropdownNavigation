//Toggling nav
const iconMenu = document.querySelector('.icon-menu')
const iconCloseMenu = document.querySelector('#icon-close-menu')
const nav = document.querySelector('nav')

iconMenu.addEventListener('click', ()=> {
    nav.classList.add('nav-active')
})
iconCloseMenu.addEventListener('click', ()=> {
    nav.classList.remove('nav-active')
})


//For subnav(Features, Company) display in the primary-nav
const featuresLink = document.querySelector('.features-parent-link')
const companyLink = document.querySelector('.company-parent-link')
const featureSubLinks = document.querySelector('.features-sub-links')
const companySubLinks = document.querySelector('.company-sub-links')
const featuresDownArrow = document.querySelector('.features.down-arrow')
const featuresUpArrow = document.querySelector('.features.up-arrow')
const companyDownArrow = document.querySelector('.company.down-arrow')
const companyUpArrow = document.querySelector('.company.up-arrow')

featuresLink.addEventListener('click', ()=>{
    if(featureSubLinks.classList.contains('features-sub-links-active')){
        featureSubLinks.classList.remove('features-sub-links-active')

        featuresDownArrow.style.display= 'unset'
        featuresUpArrow.style.display= 'none'
    }else{
        featureSubLinks.classList.add('features-sub-links-active')

        featuresDownArrow.style.display= 'none'
        featuresUpArrow.style.display= 'unset'
    }
})

companyLink.addEventListener('click', ()=>{
    // companySubLinks.classList.toggle('company-sub-links-active')
    if(companySubLinks.classList.contains('company-sub-links-active')){
        companySubLinks.classList.remove('company-sub-links-active')
        
        companyDownArrow.style.display= 'unset'
        companyUpArrow.style.display= 'none'
    }else{
        companySubLinks.classList.add('company-sub-links-active')

        companyDownArrow.style.display= 'none'
        companyUpArrow.style.display= 'unset'
    }
})