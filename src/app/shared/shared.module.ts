import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutsModule } from "./_components/layouts/layouts.module";
import { HttpClientModule } from "@angular/common/http";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgOptionHighlightModule } from "@ng-select/ng-option-highlight";
import { ClickstoppropagationDirective } from './_directives/clickstoppropagation.directive';

@NgModule({
  declarations: [ClickstoppropagationDirective],
  imports: [
    CommonModule,
    LayoutsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptionHighlightModule,
  ],
  exports: [
    CommonModule,
    LayoutsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptionHighlightModule,
  ],
  providers: [],
})
export class SharedModule {}
