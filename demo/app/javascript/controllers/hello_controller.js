import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "count" ];

  connect() {
    this.countSelected();
    this.element.querySelectorAll("input[name='task_ids[]']").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        this.countSelected();
      });
    });
  }

  countSelected() {
    const count = document.querySelectorAll("input[name='task_ids[]']:checked").length;
    this.countTarget.textContent = count;
  }
}



