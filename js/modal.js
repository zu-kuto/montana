window.addEventListener("load", e => {
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })
    
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    const form = document.querySelector("#contact-form")
    document.querySelector("#inputsubmit").addEventListener("click", e => {
        const data = form.serialize()
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