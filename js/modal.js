window.addEventListener("load", e => {
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })
    
    const overlay = document.getElementById('overlay')
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })
    
    const form = document.querySelector("#contact-form")
    form.addEventListener("submit", e => {
        e.preventDefault()
    })
    
    document.querySelector("#inputsubmit").addEventListener("click", e => {
        const data = new URLSearchParams(new FormData(form)).toString()
        e.preventDefault()
        fetch("montmail.php", {
            method: "POST",
            body: data
        }).then(res => {
            if (res.status == 200) {
                showModal("modal-success")
            } else {
                showModal("modal-fail")
            }
        })
    })
})



function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const showModal = modalName => {
    const mod = document.querySelector("#" + modalName)
    openModal(mod)
}