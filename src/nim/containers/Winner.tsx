import { connect } from 'react-redux';
import { Player, PlayerProps } from '../components/Player';
import { NimAction } from '../state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from '../state/reducer';
import { getWinner } from '../state/selectors';

export const mapStateToProps: MapStateToProps<NimState, PlayerProps> = state => ({
    player: getWinner(state)
});

export const mapDispatchToProps: MapDispatchToProps<NimAction, PlayerProps> = dispatch => ({});

export const Winner = connect(mapStateToProps, mapDispatchToProps)(Player);
