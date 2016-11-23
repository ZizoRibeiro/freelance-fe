import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'

})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(21, 'Google company', 'http://portforlio.zizoribeiro.com', 'Ruby on Rails', 150, 120, 15, 'zizo.ribeiro@gmail.com')
  proposalTwo: Proposal = new Proposal(22, 'Amazon company', 'http://portforlio.zizoribeiro.com', 'Ruby on Rails', 212, 120, 15, 'zizo.ribeiro@gmail.com')
  proposalThree: Proposal = new Proposal(22, 'Microsoft company', 'http://portforlio.zizoribeiro.com', 'Ruby on Rails', 90, 120, 15, 'zizo.ribeiro@gmail.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}