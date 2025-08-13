# # import pygetwindow as gw
# # import win32process
# # python.analysis.typeCheckingMode
# import sys
# import psutil
# from get_lcu_lockfile import handle_lcu_lockfile
# sys.stdout.reconfigure(encoding='utf-8') # type: ignore

# # purpose of this entire file is to successfully retrieve client positioning + resolution size
# # other events such as when to display items will be determined based on client websocket responses
# # platform specific implementation soon?

# # implementation:
# # searching for root lockfile directory is a bad idea as literally any file / process can have their name changed (unless ask for dir)
# # doing something like: get processes => check for active lockfile => if name in lockfile is LeagueClient (default) then 
# # lol dir correctly found => if any step was incorrect print the err and ask user for manual dir input


# def locate_client_process():
#     # League client will contain the same resolution as the patcher, therefore we need to attempt to retrieve at least one concurrent instance
#     # the reason we look for a lockfile is because what if the league process changes names by riot / for some reason aren't listed below?
#     process_name, process_path = '', ''

#     for process in psutil.process_iter(['name', 'pid', 'exe']):
#         try:
#             process_name = process.name()
#             process_path = process.exe()
#             lockfile_data = handle_lcu_lockfile(process_path)

#             if (lockfile_data): 
#                 return lockfile_data

#         except (psutil.AccessDenied, psutil.ZombieProcess, psutil.NoSuchProcess):
#             continue
#     return
    
# if __name__ == "__main__":
#     # client_window = locate_client_process()
#     print(f'client details: {locate_client_process()}')