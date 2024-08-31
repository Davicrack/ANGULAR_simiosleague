import { Routes } from '@angular/router';
import { RegulationSanctionListComponent } from './shared/components/regulation-saction/regulation-sanction.component';
import { AppComponent } from './app.component';
import { CircuitComponent } from './shared/components/circuit/circuit.component';
import { SingleCircuitComponent } from './shared/components/circuit/single-circuit/single-circuit.component';
import { CreateCircuitComponent } from './shared/components/circuit/create-circuit/create-circuit.component';
import { DriverComponent } from './shared/components/driver/driver.component';
import { CreateDriverComponent } from './shared/components/driver/create-driver/create-driver.component';
import { SingleDriverComponent } from './shared/components/driver/single-driver/single-driver.component';
import { PenaltyComponent } from './shared/components/penalty/penalty.component';
import { PetitionComponent } from './shared/components/petition/petition.component';
import { PointsComponent } from './shared/components/points/points.component';
import { RaceComponent } from './shared/components/race/race.component';
import { RaceResultComponent } from './shared/components/race-result/race-result.component';
import { SeasonComponent } from './shared/components/season/season.component';
import { TeamComponent } from './shared/components/team/team.component';
import { UserComponent } from './shared/components/user/user.component';
import { CreateUserComponent } from './shared/components/user/create-user/create-user.component';
import { SingleUserComponent } from './shared/components/user/single-user/single-user.component';
import { CreateTeamComponent } from './shared/components/team/create-team/create-team.component';
import { SingleTeamComponent } from './shared/components/team/single-team/single-team.component';
import { CreateSeasonComponent } from './shared/components/season/create-season/create-season.component';
import { SingleSeasonComponent } from './shared/components/season/single-season/single-season.component';
import { SanctionComponent } from './shared/components/sanction/sanction.component';
import { CreateSanctionComponent } from './shared/components/sanction/create-sanction/create-sanction.component';
import { SingleSanctionComponent } from './shared/components/sanction/single-sanction/single-sanction.component';
import { SingleRegulationSanctionComponent } from './shared/components/regulation-saction/single-regulation-sanction/single-regulation-sanction.component';
import { CreateRegulationSanctionComponent } from './shared/components/regulation-saction/create-regulation-sanction/create-regulation-sanction.component';
import { CreateRaceResultComponent } from './shared/components/race-result/create-race-result/create-race-result.component';
import { SingleRaceResultComponent } from './shared/components/race-result/single-race-result/single-race-result.component';
import { CreateRaceComponent } from './shared/components/race/create-race/create-race.component';
import { SingleRaceComponent } from './shared/components/race/single-race/single-race.component';
import { CreatePointsComponent } from './shared/components/points/create-points/create-points.component';
import { SinglePointsComponent } from './shared/components/points/single-points/single-points.component';
import { CreatePenaltyComponent } from './shared/components/penalty/create-penalty/create-penalty.component';
import { SinglePenaltyComponent } from './shared/components/penalty/single-penalty/single-penalty.component';
import { CreatePetitionComponent } from './shared/components/petition/create-petition/create-petition.component';
import { SinglePetitionComponent } from './shared/components/petition/single-petition/single-petition.component';
import { CalendarDivComponent } from './calendar-div/calendar-div.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    { path: 'circuit/consult', component: CircuitComponent },
    { path: 'circuit/create', component: CreateCircuitComponent },
    { path: 'circuit/:id', component: SingleCircuitComponent },
    
    { path: 'driver/consult', component: DriverComponent },
    { path: 'driver/create', component: CreateDriverComponent },
    { path: 'driver/:id', component: SingleDriverComponent },

    { path: 'penalty/consult', component: PenaltyComponent },
    { path: 'penalty/create', component: CreatePenaltyComponent },
    { path: 'penalty/:id', component: SinglePenaltyComponent},

    { path: 'petition/consult', component: PetitionComponent },
    { path: 'petition/create', component: CreatePetitionComponent },
    { path: 'petition/:id', component: SinglePetitionComponent },

    { path: 'points/consult', component: PointsComponent },
    { path: 'points/create', component: CreatePointsComponent },
    { path: 'points/:id', component: SinglePointsComponent },

    { path: 'race/consult', component: RaceComponent },
    { path: 'race/create', component: CreateRaceComponent },
    { path: 'race/:id', component: SingleRaceComponent},

    { path: 'raceResult/consult', component: RaceResultComponent },
    { path: 'raceResult/create', component: CreateRaceResultComponent },
    { path: 'raceResult/:id', component: SingleRaceResultComponent},

    { path: 'regulationSanction/consult', component: RegulationSanctionListComponent },
    { path: 'regulationSanction/create', component: CreateRegulationSanctionComponent },
    { path: 'regulationSanction/:id', component: SingleRegulationSanctionComponent },

    { path: 'sanction/consult', component: SanctionComponent },
    { path: 'sanction/create', component: CreateSanctionComponent },
    { path: 'sanction/:id', component: SingleSanctionComponent },
    { path: 'sanction/single', component: SingleSanctionComponent },

    { path: 'season/consult', component: SeasonComponent },
    { path: 'season/create', component: CreateSeasonComponent },
    { path: 'season/:id', component: SingleSeasonComponent },

    { path: 'team/consult', component: TeamComponent },
    { path: 'team/create', component: CreateTeamComponent },
    { path: 'team/:id', component: SingleTeamComponent },

    { path: 'user/consult', component: UserComponent },
    { path: 'user/login', component: LogInComponent },
    { path: 'user/create', component: CreateUserComponent },
    { path: 'user/:id', component: SingleUserComponent },

    {path: '', component:InitialPageComponent},
];
