import { connect } from 'react-redux';
import { ResetGame, ResetGameProps } from '../components/ResetGame';
import { NimAction, resetGame } from '../state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from '../state/reducer';

export const mapStateToProps: MapStateToProps<NimState, ResetGameProps> = () => ({});

export const mapDispatchToProps: MapDispatchToProps<NimAction, ResetGameProps> = dispatch => ({
    onResetGame: () => dispatch(resetGame())
});

export const PlayAgain = connect(mapStateToProps, mapDispatchToProps)(ResetGame);
