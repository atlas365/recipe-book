import { Directive, HostBinding, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	@HostBinding ('class.open') open:boolean = false;
	
	@HostListener("click") toggleOpen(){
		this.open = !this.open;
	}
}