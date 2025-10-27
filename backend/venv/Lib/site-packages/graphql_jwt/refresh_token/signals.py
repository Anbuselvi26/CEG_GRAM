from django.dispatch import Signal

refresh_token_revoked = Signal(['request', 'refresh_token'])
refresh_token_rotated = Signal(['request', 'refresh_token'])
