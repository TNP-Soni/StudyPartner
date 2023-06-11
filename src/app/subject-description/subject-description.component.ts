import { Component, OnInit , Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'app-subject-description',
  templateUrl: './subject-description.component.html',
  styleUrls: ['./subject-description.component.css']
})
export class SubjectDescriptionComponent implements OnInit  {
  //dummt data for infinite scroll
  dummydata = [
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
    {title:"Early Math Review",topics:"Counting,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20,Addition and subtraction within 20"},
    {title:"Kindergarten",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"1st grade",topics:"Counting and place value, addition and subtraciton, measurement and geometry"},
    {title:"2nd grade", topics:"Counting and place value, addition and subtraciton, measurement and geometry, money and time,data,place value"},
  ]
  detaileddesc = false;
  data=[{title:"Dummy",topics:"DATA"}]
  i=0
  j=8
  ngOnInit(): void {
    this.setdata();
  }
  @Output() changeScreenEvent = new EventEmitter<string>();

  opendetaileddesc(){
    this.detaileddesc=true;
  }
  setdata(){
    for(let k=0;this.i<this.dummydata.length && k<this.j;this.i++,k++){
      this.data[this.i]=this.dummydata[this.i];
    }
  }
  onScroll() {
    this.setdata();
  }

}
