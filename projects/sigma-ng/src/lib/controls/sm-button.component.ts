import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sigma-button',
  template: `
    <button class="sigma-button"
      [class.disabled]="disabled"
      [class.loading]="loading"
      [class.primary]="primary"
      [name]="name"
      [value]="value"
      [disabled]="disabled || loading"
      [type]="type"
      (click)="onClick($event)"
    >
      <span *ngIf="loading" class="sigma-spinner"></span>
      {{label}}
    </button>
  `,
  styleUrls: ['style.css']
})
export class SigmaNgButton implements OnInit {
  constructor() { }

  @Input() type = 'button';
  @Input() label = 'Click me!';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() name = 'default-';
  @Input() value = 'button';
  @Input() primary = false;

  @Output() buttonClick = new EventEmitter();

  private originalLabel = '';

  ngOnInit() {
    this.originalLabel = this.label;
    if (this.loading === true) {
      this.label = 'Please wait';
    }
  }

  ngOnChanges() {
    if (this.loading === false) {
      this.label = this.originalLabel;
    }
  }

  onClick(event: any) {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}
