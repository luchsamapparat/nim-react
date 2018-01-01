import { connect } from 'react-redux';
import { TurnList, TurnListProps } from '../components/TurnList';
import { NimAction } from '../state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from '../state/reducer';
import { getTurns } from '../state/selectors';

export const mapStateToProps: MapStateToProps<NimState, TurnListProps> = state => ({
    turns: getTurns(state)
});

export const mapDispatchToProps: MapDispatchToProps<NimAction, TurnListProps> = dispatch => ({});

export const Turns = connect(mapStateToProps, mapDispatchToProps)(TurnList);
