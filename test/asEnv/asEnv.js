var src = ["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":2},"<main>","asEnv\\asEnv.rb","top",[],0,[],[1,["getglobal","$native"],["setglobal","$n"],2,["getglobal","$n"],["putstring","flash.text.*"],["send","import",1,null,0,null],["pop"],3,["getglobal","$n"],["putstring","flash.system.*"],["send","import",1,null,0,null],["pop"],5,["putnil"],["putnil"],["defineclass","ASEnv",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":1},"<class:ASEnv>","asEnv\\asEnv.rb","class",[],0,[],[6,["putnil"],["definemethod","initialize",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":1},"initialize","asEnv\\asEnv.rb","method",[],0,[],[7,["putnil"],["send","showMemory",0,null,24,null],["pop"],8,["putnil"],["send","drawCircle",0,null,24,null],["pop"],9,["putnil"],["send","addButton",0,null,24,null],["leave"]]],0],13,["putnil"],["definemethod","showMemory",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":3},"showMemory","asEnv\\asEnv.rb","method",[],0,[],[14,["getglobal","$n"],["send","TextField",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@textField"],15,["getinstancevariable","@textField"],["getglobal","$n"],["send","TextFieldAutoSize",0,null,0,null],["send","LEFT",0,null,0,null],["send","autoSize=",1,null,0,null],["pop"],16,["getinstancevariable","@textField"],["putstring","Memory: "],["getglobal","$n"],["send","System",0,null,0,null],["send","totalMemory",0,null,0,null],["send","to_s",0,null,0,null],["send","+",1,null,0,null],["putstring"," bytes\n"],["send","+",1,null,0,null],["send","text=",1,null,0,null],["pop"],17,["getinstancevariable","@textField"],["putobject",400],["send","x=",1,null,0,null],["pop"],18,["getglobal","$n"],["send","_root",0,null,0,null],["getinstancevariable","@textField"],["send","addChild",1,null,0,null],["leave"]]],0],21,["putnil"],["definemethod","drawCircle",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":2,"stack_max":4},"drawCircle","asEnv\\asEnv.rb","method",["g"],0,[],[22,["getglobal","$n"],["send","_root",0,null,0,null],["send","graphics",0,null,0,null],["setlocal",2],23,["getlocal",2],["putobject",16711680],["send","beginFill",1,null,0,null],["pop"],24,["getlocal",2],["putobject",100],["putobject",100],["putobject",100],["send","drawCircle",3,null,0,null],["pop"],25,["getlocal",2],["send","endFill",0,null,0,null],["pop"],27,["getlocal",2],["putobject",65280],["putobject",0.5],["send","beginFill",2,null,0,null],["pop"],28,["getlocal",2],["putobject",200],["putobject",200],["putobject",100],["send","drawCircle",3,null,0,null],["pop"],29,["getlocal",2],["send","endFill",0,null,0,null],["leave"]]],0],32,["putnil"],["definemethod","addButton",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":2,"stack_max":3},"addButton","asEnv\\asEnv.rb","method",["callback"],0,[["break",null,"label_0","label_9","label_9",0]],["label_0",33,["putnil"],["getconstant","Proc"],["send","new",0,["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":1,"local_size":1,"stack_max":4},"block in addButton","asEnv\\asEnv.rb","block",["evt"],[1,[],0,0,-1,-1,3],[["redo",null,"label_0","label_46","label_0",0],["next",null,"label_0","label_46","label_46",0]],["label_0",33,["getinstancevariable","@textField"],["dup"],["send","text",0,null,0,null],["putstring","type: "],["getdynamic",1,0],["send","type",0,null,0,null],["send","+",1,null,0,null],["putstring","\n"],["send","+",1,null,0,null],["send","+",1,null,0,null],["send","text=",1,null,0,null],"label_46",["leave"]]],0,null],"label_9",["setlocal",2],34,["getinstancevariable","@textField"],["putstring","click"],["getlocal",2],["send","addEventListener",2,null,0,null],["leave"]]],0],["putnil"],["leave"]]],0],["pop"],38,["putnil"],["getconstant","ASEnv"],["send","new",0,null,0,null],["leave"]]];
