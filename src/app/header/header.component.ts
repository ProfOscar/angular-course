import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  collapsed = true;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.onFetchData();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

}
