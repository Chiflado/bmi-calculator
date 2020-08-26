import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  @Output() cancel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }

}
