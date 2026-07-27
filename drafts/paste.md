it should run to the end. and if needed, it runs again for the latest state.

when set, if is_syncing, set should_sync_again true, otherwise sync.

when sync, set is_syncing true. at the end, if should sync again, then toggle it off and sync again, otherwise is syncing false.
