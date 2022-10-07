import { Injectable, ViewContainerRef } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";

@Injectable()

export class ModalService{
    
    constructor(private viewContainerRef: ViewContainerRef){}

    public open(modalConfig: ModalConfig): ModalRef{
        //componente pode ser fabricado diretamento pela viewContainerRef
        const componentRef = this.viewContainerRef.createComponent(ModalComponent);

        return new ModalRef();
    }
}

export class ModalRef{
    public close(): void{
        console.log('close called');
    }
}
