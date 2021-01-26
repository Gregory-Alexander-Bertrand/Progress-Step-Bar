const progress = document.getElementById('progress')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const step = document.querySelectorAll('.step')

//Makes first step the active on page load.
let currentActive = 1

//Whatever step the user is on becomes active.
function update() {
    step.forEach((step, idx) => {
        if(idx < currentActive) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (step.length - 1) * 100 + '%'

    if(currentActive === 1) {
        previous.disabled = true
    } else if (currentActive === step.length) {
        next.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }
}

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > step.length) {
        currentActive = step.length
    }

    update()
})

previous.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})
