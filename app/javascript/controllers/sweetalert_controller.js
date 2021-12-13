import Swal from 'sweetalert2'
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sweetalert"
export default class extends Controller {
  static values = { title: String,
                    confirmText: String,
                    cancelText: String }

  connect() {
    this.redirect = false;
  }

  showAlert(event) {
    if (this.redirect) return;


    event.stopImmediatePropagation();
    event.preventDefault();

    Swal.fire({
      title: this.titleValue,
      showCancelButton: true,
      confirmButtonText: this.confirmTextValue,
      cancelButtonText: this.cancelTextValue,
    }).then((result) => {
      if (result.isConfirmed) {
        this.redirect = true
        this.element.click();
      }
    })
  }
}
