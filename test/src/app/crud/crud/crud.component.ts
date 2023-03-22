import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  EditService,
  EditSettingsModel,
  GridComponent,
  PageService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { Data } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [ToolbarService, EditService, PageService],
})
export class CrudComponent implements OnInit {

  status: any;
  pogramer_data: any;
  pogramer_form!: FormGroup;
  issubmitted: boolean = false;
  @ViewChild('Grid') public grid!: GridComponent;
  public targetElement!: HTMLElement;
  add_data: any;
  edit_data: any;
  public pageSettings: Object | any;
  programNumber: string | any;
  programBudget: number | any;
  programDescription: string | any;
  isVirtual!: boolean;
  programName!: string;
  programID!: string;
  data: any;

  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.pageSettings = { pageSizes: true, pageSize: 12 };
    this.getPogramerData();



    this.pogramer_form = new FormGroup({
      programID: new FormControl(''),
      programName: new FormControl('', Validators.required),
      programNumber: new FormControl('', Validators.required),
      programBudget: new FormControl('', Validators.required),
      programDescription: new FormControl('', Validators.required),
      isVirtual: new FormControl(false),
      canDelete: new FormControl(false),
      isActive: new FormControl(false),
    });
  }

  get pogramerForm() {
    return this.pogramer_form.controls;
  }

 Edit(event: any) {
    console.log('edit:', event.target);

    this.pogramer_form.patchValue(
      this.grid?.getRowInfo(event.target).rowData || {}
    );

    console.log(
      'edit:',
      this.pogramer_form,
      this.grid?.getRowInfo(event.target).rowData
    );
  }
  // Delete(event: any) {
  //   console.log('delete:', event);
  //   console.log(this.grid?.getRowInfo(event.target).rowData);
  // }

  getPogramerData() {
    this.crud.getAllData().subscribe((res: any) => {
      console.log(res);
      this.status = res.success;
      console.log(this.status);
      this.pogramer_data = res.programs;
      console.log(this.pogramer_data);
    });
  }

  postdata() {
     let formdata = {
      programNumber: this.programNumber,
      programBudget: this.programBudget,
      programDescription: this.programDescription,
      isVirtual: this.isVirtual,
      programName: this.programName,
    };
    console.log(formdata);

    this.crud.addData(formdata).subscribe((res) => {
      console.log(res);
      console.log('data succusfuly send.');
    });

    this.pogramer_form.reset();
  }

  editData() {
    let formdata = {
      programID: this.programID,
      programNumber: this.programNumber,
      programBudget: this.programBudget,
      programDescription: this.programDescription,
      isVirtual: this.isVirtual,
      programName: this.programName,
    };

    console.log(formdata);
    console.log(this.pogramer_form.value.programID);

    this.crud.updateData(formdata).subscribe((res) => {});

    this.pogramer_form.reset();
  }

  onactive(data: any) {


    if (data.isActive) {
      this.crud.deactive(data.programID).subscribe((res) => {});
    } else {
      this.crud.active(data.programID).subscribe((res) => {});
    }
  }
}
