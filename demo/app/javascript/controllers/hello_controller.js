import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "count", "checkbox" ];

  connect() {
    this.countSelected();
    this.element.querySelectorAll("input[name='task_ids[]']").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        this.countSelected();
        this.change()
      });
    });
  }

  countSelected() {
    const count = document.querySelectorAll("input[name='task_ids[]']:checked").length;    
    this.countTarget.textContent = count;
  }

  change() {
    const boxesWithColor = document.querySelectorAll("input[name='task_ids[]']")
    boxesWithColor.forEach(box => {
      console.log(box.checked)
      if(box.checked) {
        const parentDiv = box.closest(".index-post")
        parentDiv.style.border = "1.5px solid orange"
      } else {
        const parentDiv = box.closest(".index-post")
        parentDiv.style.border = "none"
      }
    })
  }

}



