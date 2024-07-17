import { ApiService } from 'src/app/api.service';
import { APIEndPoints } from 'src/app/statics/Endpoints';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Component, AfterViewInit, ViewChild, ChangeDetectionStrategy, TemplateRef, inject } from '@angular/core';
import { CustomDialogComponent } from 'src/app/reusable/custom-dialog/custom-dialog.component';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,

})
  export class TablesComponent implements AfterViewInit  {

  loadedStories:boolean = false;

  constructor(private service:ApiService, private modalService :NgbModal ){}
  displayedColumns: string[] = ['id', 'category', 'title', 'genre','description', 'generated_on','view_more'];

    dataSource = new MatTableDataSource<PeriodicElement>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;


    ngAfterViewInit() {
      this.getGroups()
      this.dataSource.paginator = this.paginator;
    }
  

  getGroups(){
    this.service.get(APIEndPoints.GET_STORIES).subscribe((res:any) => {
      
      console.log(res)
      if (res.status == 230 ){
        this.dataSource.data = res.data
        this.loadedStories =true
      }
      if(res.status == 400){
      }
      if(res.status == 403){
      }
      if(res.status == 500){
      }
      if(res.status == 340){
      }
    })
  }
	openScrollableContent(longContent) {
		this.modalService.open(longContent, { scrollable: true });
	}
  
  }


  export interface PeriodicElement {
    id:number;
    title: string;
    category: string;
    genre: string;
    description: string;
    generated_on:string;
  }
