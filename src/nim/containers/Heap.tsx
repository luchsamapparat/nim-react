import { connect } from 'react-redux';
import { Tokens, TokensProps } from '../components/Tokens';
import { NimAction } from '../state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from '../state/reducer';
import { getHeapSize } from '../state/selectors';

export const mapStateToProps: MapStateToProps<NimState, TokensProps> = state => ({
    quantity: getHeapSize(state)
});

export const mapDispatchToProps: MapDispatchToProps<NimAction, TokensProps> = dispatch => ({});

export const Heap = connect(mapStateToProps, mapDispatchToProps)(Tokens);
