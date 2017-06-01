/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserService } from "app/user/user.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
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
});
