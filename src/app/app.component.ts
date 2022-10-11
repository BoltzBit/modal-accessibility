import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild('modal') modalTemplateRef!: TemplateRef<any>;

	public title = 'modal-accessibility';
	public firstName: string = 'Flávio';
	public modalRef!: ModalRef;

	constructor(
		public _modalService: ModalService,
		private _viewContainerRef: ViewContainerRef){
			this._modalService._viewContainerRef = _viewContainerRef;
		}

	public show(): void{
		this.modalRef = this._modalService.open({
			templateRef: this.modalTemplateRef,
			title: 'User details'
		});
	}
}
