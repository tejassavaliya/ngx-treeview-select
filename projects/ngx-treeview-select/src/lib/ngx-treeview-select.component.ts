import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'lib-ngx-treeview-select',
  templateUrl: './ngx-treeview-select.component.html',
  styleUrls: ['./ngx-treeview-select.component.css']
})
export class NgxTreeviewSelectComponent implements OnInit {

  @Input() list;
  @Input() selectedTreeNode: any | null;
  @Input() idKey: string;
  @Input() displayKey: string;
  @Input() selectClass: string;

  @Output() selectedNodeTrigger = new EventEmitter<any>();
  @ViewChild('insideElement') insideElement;
  isOpen = false;
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.insideElement.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
  constructor() {
    this.selectedTreeNode = null;
  }

  ngOnInit(): void {}

  openTree(event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
  public selectNode( node: any ): void {
    this.selectedTreeNode = node;
    this.selectedNodeTrigger.emit(node);
    console.group( 'Selected Tree Node' );
    console.log( node);
    console.log( 'Label:', node.Name );
    console.log( 'Children:', node.children && node.children.length );
    console.groupEnd();
    this.isOpen = !this.isOpen;

  }

}
