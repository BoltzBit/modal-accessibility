import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fade]
})
export class AppComponent implements AfterViewInit {
	@ViewChild('modal') modalTemplateRef!: TemplateRef<any>;

	public title = 'modal-accessibility';
	public firstName: string = 'Flávio';
	public modalRef!: ModalRef;
	public info: boolean = false;

	constructor(
		public _modalService: ModalService,
		private _viewContainerRef: ViewContainerRef){
		}

	public ngAfterViewInit(): void {
		this._modalService._viewContainerRef = this._viewContainerRef;
	}

	public show(): void{
		this.modalRef = this._modalService.open({
			templateRef: this.modalTemplateRef,
			title: 'User details'
		});
	}
}
