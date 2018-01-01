import { GameConfig } from '@luchsamapparat/nim';
import { connect } from 'react-redux';
import { StartNewGameForm, StartNewGameFormProps } from '../components/StartNewGameForm';
import { NimAction, startGame } from '../state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from '../state/reducer';

export const mapStateToProps: MapStateToProps<NimState, StartNewGameFormProps> = () => ({});

export const mapDispatchToProps: MapDispatchToProps<NimAction, StartNewGameFormProps> = dispatch => ({
    onStartNewGame: (config: GameConfig) => dispatch(startGame(config))
});

export const StartNewGame = connect(mapStateToProps, mapDispatchToProps)(StartNewGameForm);
