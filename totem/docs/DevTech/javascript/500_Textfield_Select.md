---
title: JS HTML input 自動全選
description: Javascript Template input selects all on focus
keywords: [javascript,input select]
---


# Javascript Template
## input text 自動全選

```javascript
            <script type="text/javascript"> 
            $(function () {
                var focusedElement;
                $(document).on('focus', 'input', function () {
                    if (focusedElement == this) return; 
                    //already focused, return so user can now place cursor at specific point in input.
                    focusedElement = this;
                    setTimeout(function () { focusedElement.select(); }, 20); 
                    //select all text in any field on focus for easy re-entry. Delay sightly to allow focus to "stick" before selecting.
                });
            });
            </script>
```