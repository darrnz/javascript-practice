export function main() {

    const startButton = document.getElementById('start')
    const pauseButton = document.getElementById('pause')
    const resetButton = document.getElementById('reset')
    let intervalId

    function timerFunction() {
        const timer = document.getElementById('timer').textContent

        const timerValue = Number(timer) + 1
        const timerToText = timerValue.toString()
        document.getElementById('timer').textContent = timerToText
    }

    function runTimer() {
        pauseButton.classList.remove('hidden')
        resetButton.classList.add('hidden')
        intervalId = setInterval(timerFunction, 1000)
    }

    const pauseTimer = () => {
        resetButton.classList.remove('hidden')
        pauseButton.classList.add('hidden')
        clearInterval(intervalId)
        if (document.getElementById('timer').textContent !== "00") {
            startButton.textContent = "Continue"
        }
    }

    const resetTimer = () => {
        clearInterval(intervalId)
        pauseButton.classList.add('hidden')
        document.getElementById('timer').textContent = "00"
    }

    console.log('time', timer)

    startButton.addEventListener('click', runTimer)
    pauseButton.addEventListener('click', pauseTimer)
    resetButton.addEventListener('click', resetTimer)

}

