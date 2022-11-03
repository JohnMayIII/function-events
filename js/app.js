const logo = document.getElementById('logo')
logo.innerText = "Create-A-Guardian"

const submitBtn = document.getElementById('submitBtn')
const guardianLoadouts = document.getElementById('guardianLoadouts')
let guardians = []

const collectData =()=>{
    // collect information

    const originRegion = document.getElementById('originRegion').value
    const guardianClass = document.getElementById('guardianClass').value
    const elementSubclass = document.getElementById('elementSubclass').value
    const primaryWeapon = document.getElementById('primaryWeapon').value
    const secondaryWeapon = document.getElementById('secondaryWeapon').value
    const heavyWeapon = document.getElementById('heavyWeapon').value

    let data = {
        originRegion,
        guardianClass,
        elementSubclass,
        primaryWeapon,
        secondaryWeapon,
        heavyWeapon
    }

    addData(data)
}

const addData =(obj)=>{
    guardians = [...guardians, obj]
    
    buildCard(guardians)
}
const buildCard =(arr)=>{
    let card;

    guardians.forEach(guardian =>{
        card = `
        <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 id="title" class="text-dark">title</h3>
                        </div>
                        <img src="${guardian.guardianClass}"alt="placeholder" class="img-fluid guardian-img" />
                        <div class="card-body">
                            <p class="card-text text-dark">Origin Region: <span id="originRegion">${guardian.originRegion}</span></p>
                            <p class="card-text text-dark">Element Subclass: <span id="elementSubclass">${guardian.elementSubclass}</span></p>
                        </div>
                        <div class="card-footer">
                            <p class="card-text text-dark">Primary Weapon: <span id="primaryWeapon">${guardian.primaryWeapon}</span></p>
                            <p class="card-text text-dark">Secondary Weapon: <span id="secondaryWeapon">${guardian.secondaryWeapon}</span></p>
                            <p class="card-text text-dark">Heavy Weapon: <span id="heavyWeapon"></span>${guardian.heavyWeapon}</p>
                        </div>
                    </div>
                </div>
        `
    })
    const guardianLoadouts = document.getElementById('guardianLoadouts')
    guardianLoadouts.innerHTML+= card
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();    
    collectData()

})