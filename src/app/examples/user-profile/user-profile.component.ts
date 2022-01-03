import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {

  @Input() id: number = -1;

  @Input() name: string = "";
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() lastname: string = "Unknown";
  @Output() lastnameChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public set age(value: number) {
    console.log("INPUT age changed = " + value);
    if (value >= 0) {
      this._age = value;
    }
  }
  public get age(): number {
    return this._age;
  }
  @Output() ageChange: EventEmitter<number> = new EventEmitter<number>();
  public _age: number = 0;

  @Input() public avatarUrl: string = "";

  @Output('profileClick') clickEmitter: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public handleAvatarClick(event: MouseEvent) {
    this.clickEmitter.emit(event)
    this.nameChange.emit("John");
    this.lastnameChange.emit("Wick");
    this.ageChange.emit(50);
  }

  /** Lifecycle Events */

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['name'] || changes['lastname']) {
      this.showFullName();
    }
  }

  ngOnInit(): void {
    console.log(`User: ${this.fullname} - Initialized`);
  }

  ngOnDestroy(): void {
    console.log("Destroyed!")
  }

  /** Utils */

  public get fullname(): string {
    return `${this.name} ${this.lastname}`;
  }

  public showFullName(): void {
    console.log(`Здравствуйте ${this.fullname}`);
  }
}
