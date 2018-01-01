import { connect } from 'react-redux';
import { RemoveTokensControls, RemoveTokensControlsProps } from '../components/RemoveTokensControls';
import { NimAction, playRound } from '../state/actions';
import { MapDispatchToProps, MapStateToProps, NimState } from '../state/reducer';
import { getTokensAllowedToRemoveOptions } from '../state/selectors';

export const mapStateToProps: MapStateToProps<NimState, RemoveTokensControlsProps> = state => ({
    choices: getTokensAllowedToRemoveOptions(state)
});

export const mapDispatchToProps: MapDispatchToProps<NimAction, RemoveTokensControlsProps> = dispatch => ({
    onRemoveTokens: (tokensToRemove: number) => dispatch(playRound(tokensToRemove))
});

export const RemoveTokens = connect(mapStateToProps, mapDispatchToProps)(RemoveTokensControls);
