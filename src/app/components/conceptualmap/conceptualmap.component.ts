import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


interface LevelNode {
  name: string;
  children?: LevelNode[];
}

const TREE_DATA: LevelNode[] = [
  {
    name: 'Nivel 1',
    children: [
      {
        name: 'Nivel 1.1',
        children: [{name: 'Explicación del Nivel 1.1'}],
      },
      {
        name: 'Nivel 1.2',
        children: [{name: 'Explicación del Nivel 1.2'}],
      },
    ],
  },
];

@Component({
  selector: 'app-conceptualmap',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './conceptualmap.component.html',
  styleUrl: './conceptualmap.component.css'
})


export class ConceptualmapComponent {
  treeControl = new NestedTreeControl<LevelNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<LevelNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: LevelNode) => !!node.children && node.children.length > 0;
}
