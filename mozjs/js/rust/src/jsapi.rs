#![feature(plugin, custom_attribute)]
#![feature(macros_in_extern)]
#![plugin(mpk_protector)]
#![mpk_protector]


#[cfg(feature = "debugmozjs")]
include!(concat!(env!("OUT_DIR"), "/jsapi_debug.rs"));

#[cfg(not(feature = "debugmozjs"))]
include!(concat!(env!("OUT_DIR"), "/jsapi.rs"));
