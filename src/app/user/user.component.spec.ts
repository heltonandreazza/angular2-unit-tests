/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserService } from "app/user/user.service";
import { DataService } from "app/shared/data.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [UserService, DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  })

  it('should display the user name if the user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  })

  it('shouldn\'t display the user name if the user is logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('Please log in first');
  })

  it('shouldn\'t fetch data successfully if not called async', () => {
    dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('FakeData'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  })

  //P.S - async and fakeasync is basically the same time and results, but with diferent philosofies
  it('should fetch data successfully if called async', async(() => {
    dataService = fixture.debugElement.injector.get(DataService);
    //override the dataService.getDetails() async method returning a fake data when resolved
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('FakeData'));
    fixture.detectChanges();
    //when the async resolve promise is finish
    fixture.whenStable().then(() => {
      expect(component.data).toBe('FakeData');
    })
  }))

  //P.S - async and fakeasync is basically the same time and results, but with diferent philosofies
  it('should fetch data successfully if called async', fakeAsync(() => {
    dataService = fixture.debugElement.injector.get(DataService);
    //override the dataService.getDetails() async method returning a fake data when resolved
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('FakeData'));
    fixture.detectChanges();
    //when the async resolve promise is finish
    //with fakeAsync I can remove the fixture.whenStable().then(() => expect(component.data).toBe('FakeData');)
    tick(); //tick basically means: in a fake async envoriment, finish all the async tasks/calls(spy) now
    expect(component.data).toBe('FakeData');
  }))

});
