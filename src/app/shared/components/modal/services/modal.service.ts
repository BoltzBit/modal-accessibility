import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { BodyInjectorService } from "src/app/shared/service/body-injector.service";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";
import { ModalRef } from "../models/modal-ref";

@Injectable()

export class ModalService {
    public _viewContainerRef!: ViewContainerRef;

    constructor() { }

    public open(modalConfig: ModalConfig): ModalRef {
        //componente pode ser fabricado diretamento pela viewContainerRef
        const componentRef = this.createComponentRef();

        componentRef.instance.modalConfig = modalConfig;

        const modalRef = new ModalRef(componentRef);

        componentRef.instance.modalRef = modalRef;

        return modalRef;
    }

    private createComponentRef(): ComponentRef<ModalComponent> {
        return this._viewContainerRef.createComponent(ModalComponent);
    }
}
