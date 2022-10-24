import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fade]
})
export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('modal') modalTemplateRef!: TemplateRef<any>;

	public title = 'modal-accessibility';
	public firstName: string = 'Flávio';
	public modalRef!: ModalRef;
	public info: boolean = false;
	public formGroup!: FormGroup;

	constructor(
		public _modalService: ModalService,
		private _viewContainerRef: ViewContainerRef,
		private _formBuilder: FormBuilder) {
	}

	public ngOnInit(): void {
		this.formGroup = this._formBuilder.group({
			firstName: new FormControl<string | null>('Flávio', Validators.required),
			surname: new FormControl<string | null>('', Validators.required),
			age: new FormControl<string | null>('', Validators.required),
			info: new FormControl<boolean | null>(false)
		})
	}

	public ngAfterViewInit(): void {
		this._modalService._viewContainerRef = this._viewContainerRef;
	}

	public show(): void {
		this.modalRef = this._modalService.open({
			templateRef: this.modalTemplateRef,
			title: 'User details'
		});
	}

	public submit(): void {
		if (this.formGroup.valid) {
			console.log(this.formGroup.value);
			this.modalRef.close();
		}

		return;
	}
}
