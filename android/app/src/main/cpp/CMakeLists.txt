cmake_minimum_required(VERSION 3.18.1)
project("aikeya-native")

# إضافة دعم llama.cpp للمشروع
include(FetchContent)
FetchContent_Declare(
    llama
    GIT_REPOSITORY https://github.com/ggerganov/llama.cpp.git
    GIT_TAG        master
)
FetchContent_MakeAvailable(llama)

add_library(aikeya-native SHARED native-lib.cpp)
target_link_libraries(aikeya-native llama)
