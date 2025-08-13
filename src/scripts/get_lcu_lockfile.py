# import os 
# import shutil

# def handle_lcu_lockfile(process_path: str):
#     client_dir = os.path.dirname(process_path)
#     lockfile = os.path.join(client_dir, 'lockfile')

#     if os.path.exists(lockfile):
#         print(f'{process_path} contains a lockfile')
#         return read_lockfile(lockfile, client_dir)
#     return 
#     # multiple lockfiles?

# def read_lockfile(lockfile: str, client_dir: str):
#     league_process_name = 'LeagueClient'

#     asset_wad_file = os.path.join(client_dir, 'Plugins', 'rcp-fe-lol-static-assets', 'assets.wad')
#     asset_wad_exists = os.path.exists(asset_wad_file)
    
#     file_reader = open(lockfile).read().split(':')
#     name, pid, port, password, protocol = file_reader

#     if name == league_process_name and asset_wad_exists:
#         shutil.copyfile(asset_wad_file, './assets.bak')
#         print(asset_wad_file, asset_wad_exists)
        
#         return {
#             'name': name,
#             'pid': pid,
#             'port': port,
#             'password': password,
#             'protocol': protocol,
#         }
#     return

#     # backup asset file
#     # setup user input to lockfile dir here...

