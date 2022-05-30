let ul = document.querySelector("#timeline")

function makeTimeline(arr){
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement("li")
        let divClass = ""
        let imgClass = ""
        let titleClass = ""
        let subtitleClass = ""
        let pClass = ""
    
        if (i % 2 === 0){
            li.classList.add("container-timeline", "left", "containerInternalLeft")

            divContainerInternal = ""    
            divClass = "content-timeline left"
            imgClass = "imageLeft"
            titleClass = "titleLeft"
            subtitleClass = "subtitleLeft"
            pClass = ""
    
        } else {
            li.classList.add("container-timeline", "right", "containerInternalRigth")

            divContainerInternal = ""    
            divClass = "content-timeline right"
            imgClass = "imageRight"
            titleClass = "titleRight"
            subtitleClass = "subtitleRight"
            pClass = ""
        }
    
        li.innerHTML = `
            <div class="${divClass}">
                <img class="${imgClass}" src="${arr[i].img}" alt="${arr[i].imgAlternative}">
                <h2 class="${titleClass}">${arr[i].name}</h2>
                <h5 class="${subtitleClass}">${arr[i].age}</h5>
                <p>${arr[i].history}</p>
            </div>
        `
        ul.append(li)
    }
}

makeTimeline(data)